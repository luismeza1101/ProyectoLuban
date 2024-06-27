import '../StyleSheets/InfoAdicionalProduct.css'

interface Props {
  description: string
}

const InfoAdicionalProduct: React.FC<Props> = ({description}) => {

  return (
    <section className="container infoAd">
      <p>{description}</p>
    </section>
  );
};

export default InfoAdicionalProduct;
