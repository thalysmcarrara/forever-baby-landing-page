const postEmail = async (email: string) => {
  return fetch(
    ' https://foreverliss1.websiteseguro.com/teste-dev/newsletter.php',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    }
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
};

export default {
  postEmail,
};
