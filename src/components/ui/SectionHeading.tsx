interface Props {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}

const SectionHeading = ({ eyebrow, title, children }: Props) => {
  return (
    <div className="section-heading">
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </div>
  );
};

export default SectionHeading;