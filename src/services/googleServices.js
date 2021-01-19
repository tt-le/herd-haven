import axios from 'axios';

const getLongLat = async (address, city, country, payload) => {
  const fullAddress = "+" + [address.replaceAll(' ', '+'), city.replaceAll(' ', '+'), country.replaceAll(' ', '+')].join("+") + "+";
  const url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + fullAddress + "&key=AIzaSyCzzH_05cKBIT1YNbtiuoe-k2w4U3BGG2M"
  try {
    const res = await axios.post(url)
    const { lat, lng } = res.data.results[0].geometry.location;
    delete payload.confirmPassword;
    delete payload.password;
    return payload = {
      ...payload,
      "email": payload.email,
      "lat": lat,
      "long": lng,
      "vaccinated": false
    };
  }
  catch (err) {
    console.error(err);
  }
}

export default { getLongLat }