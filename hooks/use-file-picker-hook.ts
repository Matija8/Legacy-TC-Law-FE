export function useFilePicker(
  update: (file?: File) => void,
  validate?: (file: File) => boolean,
) {
  const onOpen = () => {
    const input = document.createElement('input');
    input.type = 'file';

    input.onchange = (ev) => {
      if (!(ev.target instanceof HTMLInputElement)) {
        return;
      }
      const file = ev.target?.files?.[0];
      if (!file) {
        console.warn('File missing!');
        return;
      }
      if (validate && !validate(file)) {
        // TODO: Throw custom error
        console.warn('File validation failed!');
        return;
      }
      update(file);
    };

    input.click();
  };
  return {
    onOpen,
  };
}

export function validateFileLessThanMib(file: File, nMib: number) {
  // https://stackoverflow.com/questions/3717793/javascript-file-upload-size-validation
  if (typeof file?.size !== 'number') {
    console.warn('File size missing!', file);
    return false;
  }
  const fileSizeInMib = file?.size / 1024 / 1024; // in MiB
  return fileSizeInMib < nMib;
}
