export function useFilePicker(update: (file?: File) => void) {
  const onOpen = () => {
    const input = document.createElement('input');
    input.type = 'file';

    input.onchange = (ev) => {
      if (!(ev.target instanceof HTMLInputElement)) return;
      const file = ev.target?.files?.[0];
      update(file);
    };

    input.click();
  };
  return {
    onOpen,
  };
}
