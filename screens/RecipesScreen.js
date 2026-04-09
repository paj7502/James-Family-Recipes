import React from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';

const recipes = [
    {
        id: '1',
        title: 'Spaghetti Carbonara',
        image: 'https://example.com/spaghetti.jpg',
        tags: ['pasta', 'quick', 'italian'],
        quickInfo: 'Ready in 20 mins',
    },
    {
        id: '2',
        title: 'Chicken Tikka Masala',
        image: 'https://example.com/chicken-tikka.jpg',
        tags: ['chicken', 'spicy', 'indian'],
        quickInfo: 'Ready in 30 mins',
    },
    // Add more recipes as needed
];

const RecipesScreen = () => {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.tags}>{item.tags.join(', ')}</Text>
            <Text style={styles.quickInfo}>{item.quickInfo}</Text>
            <View style={styles.buttonContainer}>
                <Button title="View Details" onPress={() => {}} />
                <Button title="Edit" onPress={() => {}} />
            </View>
        </View>
    );

    return (
        <FlatList
            data={recipes}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    tags: {
        color: 'gray',
    },
    quickInfo: {
        marginVertical: 4,
        color: 'darkgreen',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    }
});

export default RecipesScreen;