export const CONTACT = {
  phone: "210-286-0920",
  email: "ericpainter25@gmail.com",
  facebook: "https://www.facebook.com/share/1D7nzNWfBN/?mibextid=wwXIfr",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Hunts", href: "#hunts" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export interface Species {
  name: string;
  image: string;
  description: string;
  bgPosition?: string;
  bgSize?: string;
}

export const SPECIES: Species[] = [
  {
    name: "White-Tailed Deer",
    image: "/images/whitetail-buck.jpg",
    description:
      "The crown jewel of South Texas hunting. Trophy-class bucks roam our private ranches in some of the best whitetail country in the nation.",
  },
  {
    name: "Axis Deer",
    image: "/images/axis-deer-stock.jpg",
    description:
      "Year-round hunting with no seasonal restrictions. These beautiful spotted deer offer a challenging and rewarding pursuit.",
  },
  {
    name: "Fallow Deer",
    image: "/images/eric-fallow.jpg",
    description:
      "Impressive palmated antlers and striking coloration make fallow deer one of the most sought-after exotics in the state.",
  },
  {
    name: "Blackbuck Antelope",
    image: "/images/blackbuck.jpg",
    description:
      "Fast, alert, and strikingly beautiful. Blackbuck hunts test your patience and marksmanship across open South Texas terrain.",
  },
  {
    name: "Nilgai",
    image: "/images/nilgai.jpg",
    description:
      "The largest Asian antelope, now thriving in South Texas. A true trophy animal that demands precision and persistence.",
  },
  {
    name: "Wild Boar",
    image: "/images/wild-boar.jpg",
    description:
      "Year-round, action-packed hunts. South Texas is home to some of the best wild hog hunting in the country.",
  },
  {
    name: "Turkey",
    image: "/images/eric-turkey.jpg",
    description:
      "Rio Grande turkeys in their native habitat. Spring and fall seasons with calling setups that put you face-to-face with these wary birds.",
  },
  {
    name: "White Wing Dove",
    image: "/images/white-wing-dove.png",
    description:
      "High-volume dove hunting at its finest. South Texas is one of the top whitewing destinations in the country — fast action, great company, and plenty of birds.",
    bgPosition: "center",
    bgSize: "contain",
  },
  {
    name: "Quail",
    image: "/images/quail.jpg",
    description:
      "Classic South Texas quail hunting on native brush country. Few experiences match a covey rise on a crisp morning with good dogs working the senderos.",
  },
];

export const OTHER_SERVICES = [
  "Ranch and Land Management",
  "Wild Game Development",
  "Ranch Consulting",
];

export const GALLERY_IMAGES = [
  { src: "/images/eric-turkey.jpg", alt: "Successful turkey hunt" },
  { src: "/images/hunters-deer.jpg", alt: "Hunters with whitetail deer" },
  { src: "/images/eric-fallow.jpg", alt: "Trophy fallow deer harvest" },
  { src: "/images/gallery-nilgai-hunt.jpg", alt: "Nilgai harvest" },
  { src: "/images/gallery-blackbuck-hunt.jpg", alt: "Blackbuck harvest" },
  { src: "/images/gallery-exotic-hunt.jpg", alt: "Exotic game hunt" },
  { src: "/images/axis-deer-harvest.jpg", alt: "Axis deer harvest" },
  { src: "/images/gallery-fallow.jpg", alt: "Fallow deer on the ranch" },
  { src: "/images/blackbuck.jpg", alt: "Blackbuck antelope on the ranch" },
  { src: "/images/whitetail-buck.jpg", alt: "Whitetail buck" },
  { src: "/images/nilgai.jpg", alt: "Nilgai in the field" },
  { src: "/images/shooting-house.jpg", alt: "Shooting house setup" },
  { src: "/images/1000022454.JPG", alt: "Hunt photo" },
  { src: "/images/1000022554.JPG", alt: "Hunt photo" },
  { src: "/images/1000022909.JPG", alt: "Hunt photo" },
  { src: "/images/1000022929.JPG", alt: "Hunt photo" },
  { src: "/images/1000022958.JPG", alt: "Hunt photo" },
  { src: "/images/1000023237.JPG", alt: "Hunt photo" },
  { src: "/images/20230922_151023_IMG_6343.PNG", alt: "Hunt photo" },
  { src: "/images/20231204_131102_IMG_7429~2.PNG", alt: "Hunt photo" },
  { src: "/images/20231230_174029_IMG_7694~2.PNG", alt: "Hunt photo" },
  { src: "/images/20240322_141437_IMG_8426.PNG", alt: "Hunt photo" },
  { src: "/images/20240324_182114_IMG_8451.PNG", alt: "Hunt photo" },
  { src: "/images/20250306_232300_IMG_1895~2.PNG", alt: "Hunt photo" },
  { src: "/images/20251108_155706.JPG", alt: "Hunt photo" },
  { src: "/images/20251116_175021(0).JPG", alt: "Hunt photo" },
  { src: "/images/20251205_170319.JPG", alt: "Hunt photo" },
];
