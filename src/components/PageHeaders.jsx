export default function PageHeaders({
  h1Text = "Hello",
  h2Text = "Subheader",
}) {
  return (
    <section className="text-center italic">
      <h1
        className="text-xl sm:text-6xl sm:mt-2 mt-3"
        style={{ textShadow: "1px 1px 0 rgba(0,0,0,.2)" }}
      >
        {h1Text}
      </h1>
      <h2 className="text-white/75 text-md sm:text-lg mt-1 sm:mt-3">
        {h2Text}
      </h2>
    </section>
  );
}
