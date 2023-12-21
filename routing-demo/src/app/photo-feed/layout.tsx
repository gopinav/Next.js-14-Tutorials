import "./styles.css";

export default function Layout(props: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      {props.modal}
      {props.children}
    </>
  );
}
