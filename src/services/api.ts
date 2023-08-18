import axios from 'axios';

 const API_BASE_URL = 'https://disease.sh/v3/covid-19';

 

interface Contact {
  id: string;
  name: string;
  email: string;
  
}

export async function fetchContactDetail(): Promise<Contact[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}/all`); 
    return response.data;
  } catch (error) {
    throw new Error('Error fetching contacts');
  }
}

interface GraphDataPoint {
  x: string;
  y: number;
}

export const fetchCountryData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/countries`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching country data');
    }
 };

export async function fetchGraphData(): Promise<GraphDataPoint[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}/historical/all?lastdays=all`); 
    return response.data;
  } catch (error) {
    throw new Error('Error fetching graph data');
  }
}



