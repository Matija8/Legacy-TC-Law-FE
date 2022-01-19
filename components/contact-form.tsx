export function ContactForm() {
  return (
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="name-surname">Ime i prezime</label>
      <input type="text" id="name-surname" name="name-surname" />

      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="msg">Poruka</label>
      <input type="text" id="msg" name="msg" />
    </form>
  );
}
