const DUMMY_DATA = [
  {
    id: "m1",
    shopName: "This is a first meetup",
    bobaTeaName: "Boba MIlk Tea",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
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
      <ul>
        {DUMMY_DATA.map((bobashop) => {
          return <li key={bobashop.shopName}>{bobashop.shopName}</li>;
        })}
      </ul>
    </section>
  );
}

export default AllBobaShopsPage;
