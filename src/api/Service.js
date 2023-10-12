import axios from "axios";

const MainApiUrl = 'https://vguide.sma.gov.ae:444/api/';
const languagesEndpoint = `${MainApiUrl}Languages`;
const MuseumsEndpoint = `${MainApiUrl}Museums`;
const CollectionsEndpoint = `${MainApiUrl}Collections?museumid=1`;
const SelectedCollectionEndpoint = `${MainApiUrl}Collections?museumid=1&language=1`;
const CollectionDetailsEndpoint = `${MainApiUrl}CollectionDetails?museumId=1&code=1&language=1&type=1&DeviceSerial=1`;

const apiCall = async (endpoint,params)=>{
    const options = {
        method: 'GET',
        url: endpoint,
        params: params? params: {}
    };

    try{
        const response = await axios.request(options);
        console.log('data received');
        return response.data;
        
    }catch(error){
        console.log('error: ',error);
        return {};
    }
}

export const fetchLanguages = ()=>{
    return apiCall(languagesEndpoint);
}

export const fetchMuseums = ()=>{
    return apiCall(MuseumsEndpoint);
}

export const fetchCollections = ()=>{
    return apiCall(CollectionsEndpoint);
}

export const fetchSelectedCollection = ()=>{
    return apiCall(SelectedCollectionEndpoint);
}

export const fetchCollectionDetails = ()=>{
    return apiCall(CollectionDetailsEndpoint);
}


