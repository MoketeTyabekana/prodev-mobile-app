
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
       
       
    },
    searchGroup: {
         padding: 16,
        backgroundColor: '#34967C',
    },
    searchFormGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    searchControlGroup: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 8,
    },
    searchFormText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 4,
    },
    searchControl: {
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        padding: 8,
        fontSize: 14,
        color: '#333',
    },
    searchButton: {
        backgroundColor: '#007AFF',
        borderRadius: 8,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    filterContainer: {
        width: 56,
        height: 56,
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        padding: 4,
    },
    listingContainer: {
        flex: 1,
        marginTop: 16,
        paddingHorizontal: 16,
    },
    paginationContainer: {
        alignItems: 'center',
        marginVertical: 16,
    },
    showMoreButton: {
        backgroundColor: '#007AFF',
        borderRadius: 24,
        paddingVertical: 10,
        paddingHorizontal: 32,
    },
    showMoreButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export { styles }