import './profile.css'
const profil =({fullName="Emna",bio="bio",profession="Dev web",handleName,children})=>{


    // {bio};
    // {fullName};
    // {profession};
    // {handleName};
return <div>
    <h1>{bio}</h1>
    <h1>{fullName}</h1>
{children}
    <h1>{profession}</h1>
    <h1>{handleName('Emna')}</h1>
</div>
}
export default profil;