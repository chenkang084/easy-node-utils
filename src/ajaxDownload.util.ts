import { isIE } from './checkBrower.util';

export const fetchDownload = (fetch: any, url: string, filename: string) => {
  if (isIE()) {
    window.location.href = url;
  } else {
    if (!url || !filename) {
      throw new Error('url or filename can not be null!');
    }

    fetch(url, {
      method: 'GET'
    })
      .then((res: any) => {
        console.log(res);
        return res.blob();
      })
      .then((blob: Blob) => {
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = filename;
        document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
        a.click();
        a.remove(); // afterwards we remove the element again
      });
  }
};

export const axiosDownload = (axios: any, url: string, filename: string) => {
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
    })
      .then((res: any) => {
        console.log(res);
        return new Blob([res.data]);
      })
      .then((blob: Blob) => {
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
  }
};
