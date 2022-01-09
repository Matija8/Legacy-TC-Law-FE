import { workAreas } from 'data/oblasti-rada';

import { useRouter } from 'next/router';

const WorkAreaPage = () => {
  const router = useRouter();
  const { workArea } = router.query;

  return <p>Post: {workArea}</p>;
};

export default WorkAreaPage;

export async function getStaticPaths() {
  return {
    paths: workAreas.map((_, idx) => ({ params: { workArea: `${idx}` } })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { workArea: string };
}) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
