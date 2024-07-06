// interface Resource {
//     url: string
//     id: string
//   }
  
//   const images = Array<number>(20).fill(0).map<Resource>(() => ({
//     id: faker.string.uuid(),
//     url: faker.image.urlPicsumPhotos()
//   } as Resource))

// <FlatList
//         horizontal
//         data={images}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <Image source={{ uri: item.url }} style={{
//             width: 300,
//             height: 300,
//             margin: 5,
//             borderRadius: 25
//           }} />
//         )} />