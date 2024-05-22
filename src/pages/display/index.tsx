import '../../assets/css/background.css'
import Button from '../../component/display';

export default function Display(){
    return (
        <>
        <div className="display" id='display'>
        <Button btnID="blue" btnColorName="Blue" bgColor="bg-indigo-700" hoverColor="hover:bg-indigo-600" />
        <Button btnID="green" btnColorName="Green" bgColor="bg-green-700" hoverColor="hover:bg-green-600" />
        <Button btnID="red" btnColorName="Red" bgColor="bg-red-700" hoverColor="hover:bg-red-600" />
        <Button btnID="yellow" btnColorName="Yellow" bgColor="bg-yellow-700" hoverColor="hover:bg-yellow-600" />
        </div>
        </>
    );
}