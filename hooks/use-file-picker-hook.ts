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