import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { RoundBtn } from 'components/round-btn';
import { SiteHead } from 'components/site-head';
import { Formik, FormikErrors } from 'formik';
import { NextPage } from 'next';
import styles from 'styles/Home.module.scss';

const careerPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <SiteHead title="Karijera" />
      <Header />
      <main className={styles.main}>
        <h2 className="heading-underlined">Karijera</h2>

        <p>
          Tražimo saradnike iz različitih pravnih disciplina i sa različitim
          iskustvima. Profesionalni i etički standardi se podrazumevaju, a s
          obzirom na naše polje rada, zahtevamo i odlično poznavanje govornog i
          pisanog engleskog jezika. Negujemo timski rad i podržavamo razvoj
          veština komunikacije i sposobnosti za postizanje izvrsnih rezultata
          pod pritiskom.
        </p>

        <p>
          Novi saradnici su dobrodošli u naš tim, bilo da imaju iskustva ili tek
          počinju karijeru, a pod uslovom da imaju želju za poslom ispunjenim
          izazovima, da dobro poznaju pravo, poznaju i ponašaju se u skladu sa
          kodeksom profesionalne etike advokata, kao i da imaju sposobnost da
          rade u različitim pravnim oblastima.
        </p>

        <p>
          Ako sebe vidite u takvoj sredini, slobodno nam pošaljite Vaš CV i
          kratko motivaciono pismo.
        </p>

        <CareerForm />
      </main>
      <Footer />
    </div>
  );
};

export default careerPage;

function CareerForm() {
  return (
    <Formik
      initialValues={{ email: '', motivational: '' }}
      validate={(values) => {
        const errors: FormikErrors<{ email: string; motivational: string }> =
          {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="text"
            name="motivational letter"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.motivational}
          />
          {errors.motivational && touched.motivational && errors.motivational}

          <RoundBtn>Dodajte CV</RoundBtn>
          <RoundBtn>Pošaljite</RoundBtn>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}
