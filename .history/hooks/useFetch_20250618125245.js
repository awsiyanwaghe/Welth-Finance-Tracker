const { useState } = require("react");

const useFetch = (cb) => {
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const fn = async() => {
        setLoading(true)
        setError(null)

        try {
            const import { StyleSheet, Text, View } from 'react-native'
            import React from 'react'
            
            const useFetch = () => {
              return (
                <View>
                  <Text>useFetch</Text>
                </View>
              )
            }
            
            export default useFetch
            
            const styles = StyleSheet.create({})
        } catch (error) {
            
        }
    }

    return {data, loading, error, fn , setData}
}

export default useFetch