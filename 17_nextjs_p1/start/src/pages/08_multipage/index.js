import { useRouter } from 'next/router'

export default function MultiPage() {
  const router = useRouter();
  const step = router.query.step ?? 0 ;
  // stepと混合しないように_stepとする
  const goToStep = (_step, asPath) => {
    router.push(`/08_multipage?step=${_step}`, asPath);
    // http://localhost:3000/08_multipage
    // http://localhost:3000/personal
    // http://localhost:3000/confirm
    // http://localhost:3000/08_multipage
    // ユーザーが直接/personalや/confirmを打つと404エラーになる
    // そのためのリライト設定をnext.config.jsに記述する
  };

  return (
    <div>
      {step == 0 && (
        <>
          <h3>Step {step}</h3>
          <button onClick={() => goToStep(1, "/personal")}>Next Step</button>
        </>
      )}
      {step == 1 && (
        <>
          <h3>Step {step}</h3>
          <button onClick={() => goToStep(2, "/confirm")}>Next Step</button>
        </>
      )}
      {step == 2 && (
        <>
          <h3>Step {step}</h3>
          <button onClick={() => goToStep(0, "/08_multipage")}>Next Step</button>
        </>
      )}
    </div>
  );
}