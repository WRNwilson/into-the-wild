//Import Images
import zebras from "../img/zebras.jpg";
import motherchildElephant from "../img/motherchildElephant.jpg";
import twogiraffes from "../img/twogiraffes.jpg";
import elephants from "../img/elephants.jpg";
import rideAlong from "../img/rideAlong.jpg";
import waterBuffalo from "../img/waterBuffalo.jpg";

export const MovieState = () => {
  return [
    {
      title: "A Dazzle Of Zebras",
      mainImg: zebras,
      secondaryImg: rideAlong,
      url: "/work/zebras",
      awards: [
        {
          title: "Minding their own business.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "This wasn't easy to shoot.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Truly A majestic sight.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Mother And Child Elephant",
      mainImg: motherchildElephant,
      url: "/work/motherchildElephant",
      secondaryImg: elephants,
      awards: [
        {
          title: "Wholesome.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Theyl were so welcoming.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "We Kept Our Distance.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Two Giraffes",
      mainImg: twogiraffes,
      url: "/work/twogiraffes",
      secondaryImg: waterBuffalo,
      awards: [
        {
          title: "They Spotted Us.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "We Got As Close As We Could.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Girls Day Out.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
