import { AxiosResponse } from 'axios';
import { isIE } from './checkBrower.util';
import { warning } from './logger.util';

const handleDownload = (contentDisposition: string, data: Blob, filename: string) => {
  try {
    // filename undefined , use api data's filename
    if (!filename && contentDisposition) {
      filename = contentDisposition
        .split(';')
        .filter((item: string) => !!item)[1]
        .split('=')[1];
    }
  } catch (error) {
    warning(error);
  }

  const downloadUrl = window.URL.createObjectURL(data);
  const a = document.createElement('a');
  a.href = downloadUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
};

export const fetchDownload = (fetch: any, url: string, filename?: string) => {
  if (isIE()) {
    window.location.href = url;
  } else {
    if (!url) {
      throw new Error('url can not be null!');
    }

    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'GET',
        credentials: 'include'
      })
        .then((res: Response) => {
          if (res.ok) {
            res.blob().then((data: Blob) => {
              handleDownload(res.headers.get('content-disposition'), data, filename);
              resolve(data);
            });
          } else {
            throw new Error(res.statusText);
          }
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }
};

export const axiosDownload = (axios: any, url: string, filename?: string) => {
  if (isIE()) {
    window.location.href = url;
  } else {
    if (!url) {
      throw new Error('url can not be null!');
    }

    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url,
        responseType: 'blob',
        withCredentials: true
      })
        .then((res: AxiosResponse) => {
          handleDownload(res.headers['content-disposition'], res.data, filename);
          resolve(res.data);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }
};
