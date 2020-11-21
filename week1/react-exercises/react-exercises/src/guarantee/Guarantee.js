import uuid from "react-uuid";
const Guarantee = () => {
  const customerServiceInfo = [
    {
      title: "Free Shipping",
      img: "./f-delivery.png",
      description:
        "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    },
    {
      title: "100% Money Back",
      img: "/coin.png",
      description:
        "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    },
    {
      title: "Online Support 24/7",
      img: "/chat.png",
      description:
        "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    },
  ];

  const customerServiceCards = customerServiceInfo.map(
    ({ title, img, description }) => (
      <div className="service-card" key={uuid()}>
        <img src={img} alt="pic" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    )
  );

  return <div className="services-section">{customerServiceCards}</div>;
};

export default Guarantee;
