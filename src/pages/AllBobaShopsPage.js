import BobaShopList from "../component/shops/BobaShopList";

const DUMMY_DATA = [
  {
    id: "m1",
    shopName: "This is a first meetup",
    bobaTeaName: "Boba MIlk Tea",
    image:
      "https://images.unsplash.com/photo-1615963244664-5b845b2025ee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    shopName: "This is a second meetup",
    bobaTeaName: "Boba MIlk Tea",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];
function AllBobaShopsPage() {
  return (
    <section>
      <h1>All Boba Shops</h1>
      <BobaShopList shops={ DUMMY_DATA}/>
    </section>
  );
}

export default AllBobaShopsPage;
