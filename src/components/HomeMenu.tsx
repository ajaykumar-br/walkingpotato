import MenuCard from "./MenuCard";

const menuData = [
    {imgSrc: '', title: 'Pani Puri', description: 'Crispy puris filled with spiced potato, chickpeas, and flavored water.'},
    {imgSrc: '', title: 'Sev Puri', description: 'Crispy puris topped with potatoes, onions, chutneys and sev.'},
    {imgSrc: '', title: 'Dahi Puri', description: 'Crispy puris filled and topped with yogurt, sweet and spicy chutneys, and sev.'},
    {imgSrc: '', title: 'Masala Puri', description: 'Crushed puris mixed with a thick, spicy gravy, topped with onions and sev.'},
    {imgSrc: '', title: 'Bhel Puri', description: 'A savoury mixture of puffed rice, veggies, and tangy tamarind sauce.'},
    {imgSrc: '', title: 'Mirchi Bajji (Plain, Cut, Stuffed)', description: 'Green chilli peppers coated in a spiced chickpea flour batter and fried.'},
    {imgSrc: '', title: 'Egg Bajji', description: 'Boiled Eggs sliced and dipped in a spiced batter, then fried to perfection.'},
    {imgSrc: '', title: 'Stuffed Capsicum Bajji', description: 'Bell peppers stuffed with a spicy potato filling, coated in batter and fried.'},
    {imgSrc: '', title: 'Veg Puff', description: 'Flaky pastry filled with a savory vegetable mixture.'},
    {imgSrc: '', title: 'Egg Puff', description: 'Flaky pastry filled with spiced boiled egg.'},
    {imgSrc: '', title: 'Chicken Puff', description: 'Flaky pastry filled with a spiced chicken mixture.'},
    {imgSrc: '', title: 'Dilpasand', description: 'Crispy, golden puff pastry filled with a sweet mix of coconut, cherries, and tutti-frutti.'},
    {imgSrc: '', title:'Momos (Chicken/Veg)', description: 'Steamed dumplings filled with spiced chicken or vegetables, served with a tangy dipping sauce.'},
    {imgSrc: '', title:'Onion Samosa', description: 'Triangular pastry filled with a spiced onion mixture, deep-fried to a golden brown.'},
    {imgSrc: '', title:'Cheesy Corn Samosa', description: 'Triangular pastry filled with a savoury mixture of corn and cheese, deep-fried to perfection.'},
    {imgSrc: '', title:'Crunchy Boti Masala', description: 'Crispy, hollow snack pipes dusted with a spicy masala blend.'},
    {imgSrc: '', title:'Tiny Tiny Burgers', description: 'Smaller, slider-style burgers with various fillings.'},
    {imgSrc: '', title:'UFO Burgers', description: 'Uniquely shaped burgers with special fillings and sauces.'},
    {imgSrc: '', title:'Long Fries', description: 'Extra-long cut, crispy potato fries.'},
    {imgSrc: '', title:'Maska Bun', description: 'Soft sweet bun generously spread with butter.'},
    {imgSrc: '', title:'Masala Corn', description: 'Sweet corn kernels tossed with butter, spices, and lemon juice.'},
    {imgSrc: '', title:'Potato Twisters (Regular/Salted/Peri-peri)', description: 'Crispy, spiral-cut potato on a stick, seasoned with various flavors.'},
    {imgSrc: '', title:'Tea/Coffee', description: 'Chai:Spiced Indian tea brewed with milk and sugar. Coffee:Strong, aromatic Indian filter coffee served hot.'},
    {imgSrc: '', title:'Falooda', description: 'Layered chilled dessert drink with vermicelli, rose syrup, chia seeds, nuts and ice cream.'},
    {imgSrc: '', title:'Mango Lassi', description: 'Creamy mango-flavoured yogurt drink.'},
];

function getRandomItems<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export default function HomeMenu({page}: {page: string}) {
    const visibleMenu = page === "home" ? getRandomItems(menuData, 3) : menuData;
    return (
        <div className="">
            <div className="max-w-6xl mx-auto mb-12">
                <div className="text-center">
                    <h2 className="text-5xl md:text-7xl font-bold mb-4 text-wp-red">
                        What's on the Menu
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
                        Explore our delicious range of snacks and treats
                    </p>
                    <div className="mt-6 h-1 w-24 bg-linear-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6 mx-16">
                {
                    /* Repeat MenuCard component as needed */
                    visibleMenu.map((menuItem, index) => (
                        <MenuCard 
                            key={index}
                            imgSrc={menuItem.imgSrc}
                            title={menuItem.title}
                            description={menuItem.description}
                        />
                    ))
                }
            </div>
        </div>
    )
}