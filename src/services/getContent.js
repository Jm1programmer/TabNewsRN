import axios from 'axios';


export default function getContent() {
    const baseUrl = 'https://www.tabnews.com.br';
axios({
  method: 'get',
  url: `${baseUrl}/api/v1/contents`,
}).then((response) => {
  console.log(response.data);
});
}