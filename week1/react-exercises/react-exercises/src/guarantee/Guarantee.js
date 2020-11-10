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

  const customerServiceCards = customerServiceInfo.map((service, i) => (
    <div className="service-card" key={i}>
      <img src={service.img} alt="pic" />
      <h2>{service.title}</h2>
      <p>{service.description}</p>
    </div>
  ));

  return <div className="services-section">{customerServiceCards}</div>;
};

export default Guarantee;
