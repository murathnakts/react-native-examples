import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

interface User {
  customer_id: number;
  customer_name: string;
  customer_surname: string;
  customer_mail: string;
  customer_phone: string;
}

const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.post<{ customers: User[] }>('http://localhost/customer');
    return response.data.customers;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching users:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return [];
  }
};

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
      console.log(fetchedUsers);
    };
    getUsers();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={users}
        keyExtractor={(item) => item.customer_id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>ID: {item.customer_id}</Text>
            <Text>Name: {item.customer_name}</Text>
            <Text>Surname: {item.customer_surname}</Text>
            <Text>Mail: {item.customer_mail}</Text>
            <Text>Phone: {item.customer_phone}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  list: {
    flex: 1,
    backgroundColor: 'black',
  },
  itemContainer: {
    marginBottom: 16,
  },
});

export default App;
