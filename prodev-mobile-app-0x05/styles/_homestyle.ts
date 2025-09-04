
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
      paddingHorizontal: 16,
       
    },
    searchGroup: {
         padding: 16,
        backgroundColor: '#34967C',

    },
    searchFormGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingLeft: 26,
        paddingRight: 8,
        paddingVertical: 6,
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
        alignItems: 'center',
        flex: 1,
    },
    searchControl: {
        
        borderRadius: 8,
       
        fontSize:12,
        color: '#333',
    },
    searchButton: {
        backgroundColor: '#FFA800',
        borderRadius: 100,
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
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        padding: 4,
    },
    listingContainer: {
        flex: 1,
        marginTop: 16,
     
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
    filterText: {
        fontSize: 10,
        marginTop: 4,
        textAlign: 'center',
    },
})

export { styles }