import React, { PropsWithChildren, useState } from "react"

type NameContextType = {
    name: string
    setName: (value: string) => void
}

export const NameContext = React.createContext<NameContextType>({ name: '',setName: () => {}});

export const NameContextProvider = ({ children }: PropsWithChildren) => {

    const [name, setName] = useState<String>('React');

    const changeName = (value: string) => setName(value)

    return (
        <NameContext.Provider value={{ name: name.toString(), setName: changeName }}>
            {children}
        </NameContext.Provider>
    );
}


// function App(): React.JSX.Element {

//     const myContext = React.useContext(NameContext)
  
//     const MyComponent = () => {
//       const nameContext = useContext(NameContext);
//       const [enter, setEnter] = useState<string>('');
//       return (
//         <View>
//           <TextInput value={enter} onChangeText={e => setEnter(e)}
//             style={{ width: 300, height: 40, borderRadius: 20, backgroundColor: 'gray' }} />
//           <Button title='Click' onPress={() => {
//             nameContext.setName(enter);
//           }} />
//         </View>
//       )
//     }