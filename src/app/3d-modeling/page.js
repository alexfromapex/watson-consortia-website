import Link from "next/link";

export default function Moved() {
  return (
    <>
      <title>3D Assets &amp; VFX - Watson Consortia</title>
      <meta httpEquiv="refresh" content="0; url=/3d-vfx" />
      <link rel="canonical" href="/3d-vfx" />
      <main className="main wc-page" style={{ padding: "160px 24px" }}>
        <p>
          This page has moved to <Link href="/3d-vfx">3D Assets &amp; VFX</Link>.
        </p>
      </main>
    </>
  );
}