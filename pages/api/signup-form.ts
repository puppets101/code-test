export default function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const body = req.body;

    if (!body.firstName) {
      return res.status(403).json({ msg: 'Förnamn är obligatoriskt.' });
    }
    if (!body.lastName) {
      return res.status(403).json({ msg: 'Efternamn är obligatoriskt.' });
    }
    if (validateEmail(body.email)) {
      return res.status(403).json({ msg: 'Ange en giltig e-postadress.' });
    }

    return res.status(200).json({ msg: 'Tack för din prenumeration!' });
  }
  res.status(500).json({ msg: 'This needs to be a post request' });
}

const validateEmail = (email: string) => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(validRegex)) {
    return false;
  }
  return true;
};
