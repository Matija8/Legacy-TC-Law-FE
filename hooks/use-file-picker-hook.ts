export function useFilePicker() {
  const onOpen = () => {
    const input = document.createElement('input');
    input.type = 'file';

    input.onchange = (ev) => {
      if (!(ev.target instanceof HTMLInputElement)) return;
      const file = ev.target?.files?.[0];
      console.log(file);
    };

    input.click();
  };
  return {
    onOpen,
  };
}
