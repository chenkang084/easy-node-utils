import { AxiosResponse } from 'axios';
import { isIE } from './checkBrower.util';
import { warning } from './logger.util';

const handleDownload = (
  contentDisposition: string,
  data: Blob,
  filename: string
) => {
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
    if (!url || !filename) {
      throw new Error('url or filename can not be null!');
    }

    fetch(url, {
      method: 'GET'
    }).then((res: Response) => {
      res.blob().then((data: Blob) => {
        handleDownload(res.headers.get('content-disposition'), data, filename);
      });
    });
  }
};

export const axiosDownload = (axios: any, url: string, filename?: string) => {
  if (isIE()) {
    window.location.href = url;
  } else {
    if (!url || !filename) {
      throw new Error('url or filename can not be null!');
    }

    axios({
      method: 'GET',
      url,
      responseType: 'blob',
      withCredentials: true
    }).then((res: AxiosResponse) => {
      handleDownload(res.headers['content-disposition'], res.data, filename);
    });
  }
};
