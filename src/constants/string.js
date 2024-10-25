
export const Strings ={
    starterText: ' Find your Comfort\nFood here',
    starterDescription: 'Here you can order food and read \n about its ingredients. Enjoy!',
    buttonText: 'Next',
    comfortFood: 'Food Ninja is Where Your\nComfort Food Lives',
    fastAndSmoothDelivery: 'Enjoy a fast and smooth food delivery at\nyour doorstep',
    loginToYourAcc:'Login To Your Account',
    orContinueWith: 'Or Continue With',
    Facebook: 'Facebook',
    Google: 'Google',
    Gmail: 'Gmail',
    forgotPassword: 'Forgot Your Password?',
    findYourFvrtFood: 'Find Your\nFavorite Food',
    noAddonsAvailable: 'No add-ons available',
    availableAddOn:'Available Add-ons',
    confirmationMsg: 'Are you sure you want to remove this item?',
    addOn:'Add-On: ',
    cartEmptyMsg:'Cart is empty.',
    orderDetails:'Order Details',
    subTotal:'Sub Total:',
    deliveryCharges:'Delivery Charges:',
    discount:'Discount',
    total:'Total',
    alreadyHaveAnAccount: 'Already have an account?',
    keepMeSignedIn:'Keep me signed in',
    emailMeAboutSpecialPricing:'Email me about special pricing',
    signUp:'Sign up',
    recommendations:'Recommendations',
    thankYou:'Thank You!',
    enjoyYourMeal:'Enjoy Your Meal',
    pleaseRateYourFood:'Please rate your Food',
    placeMyOrder:'Place My Order',
    deliveryIsInProgress:'Delivery is in Progress!',
    thankYouForYourOrder:'Thank You for your Order!',
    estimatedDeliveryTimeIs: 'Estimated Delivery time is:',
    totalItems:'Total Items: ',
    totalPrice: 'Total Price: ',
    hereIsYourReceipt:'Here\'s your receipt',
    noItemsInCart: 'No items in the cart',
    uploadYourPhotoProfile: 'Upload Your Photo Profile',
    promotionCoupons:'Promotion Coupons',
    resetYourPassword: 'Reset your password here',
    EnterYourPhoneNo:'Enter Your Phone Number',
    EnterSixDigit:'Enter Verification Code',
    OTPWWillBeSentTo:'OTP will be send to the\nfollowing number',
    resendOtpText:'Resend OTP',
    choosePaymentOption:'Choose Payment Option',
    debitCreditCard:'Debit / Credit Card',
    internetBanking:'Internet Banking',
    googlePay:'Google Pay',
    phonePe:'Phone Pe',
    addAnotherOption:'+ Add another option',
    saveCardForFuture:'Save Card For Future Checkouts',
    orderHistory:'Order History',

}

export const ScreenNames={
    Login: 'Login',
    Tutorial: 'TutorialScreen',
    Start:'StartScreen',
    Registeration: 'Register',
    Confirmation: 'Confirmation',
    Tabs:'tabs',
    Dashboard:'Dashboard',
    Vegan:'Vegan', 
    Fastfood:'Fastfood',
    Drink:'Drink',
    Sides:'Sides',
    Desserts:"Desserts",
    AuthStack:'AuthStack',
    BottomStack:'BottomStack',
    Home:'Home',
    Profile:'Profile',
    Cart:'cart',
    Chat:'Chat',
    Recommendation:'Recommendation',
    OrderConfirmation: 'OrderConfirmationScreen',
    CartScreen: 'CartScreen',
    CallScreen: 'CallScreen',
    ReceiptScren: 'ReceiptScreen',
    ProfileScreen:'ProfileScreen',
    //UserDetailScreen:'UserDetailScreen',
    UserScreen:'UserScreen',
    PromotionScreen:'PromotionScreen',
    ForgotPasswordScreen:'ForgotPasswordScreen',
    PhoneSignin:'PhoneSignin',
    MapScreen:'MapScreen',
    ChoosePaymentScreen:'ChoosePaymentScreen',
    CardPaymentScreen:'CardPaymentScreen',
    JazzCashScreen:'JazzCashScreen',
    OrderHistoryScreen:'OrderHistoryScreen',
    //OrderConfirmationScreenModal:'OrderConfirmationScreenModal'

}

const  APIDATA = 
{
  "menu": [
    {
      "name": "Beef Cheese Burger",
      "description": "A juicy beef patty with melted cheddar, lettuce, tomato, and a hint of onion and pickle.",
      "imagePath": "burger1",
      "price": 1.99,
      "category": "Burgers",
      "availableAddons": [
        {"name": "Extra Cheese", "price": 0.99},
        {"name": "Patty", "price": 1.99},
        {"name": "Avocado", "price": 1.99}
      ]
    },
    {
      "name": "Chicken Cheese Burger",
      "description": "A juicy chicken patty with melted cheddar, tomato, and a hint of onion and pickle.",
      "imagePath": "burger2",
      "price": 0.99,
      "category": "Burgers",
      "availableAddons": [
        {"name": "Pickle", "price": 0.99},
        {"name": "Mustard Sauce", "price": 0.5},
        {"name": "Jalapeno", "price": 2.0}
      ]
    },
    {
      "name": "Grilled Chicken Burger",
      "description": "A juicy grilled chicken patty with lettuce, melted cheddar, tomato, and a hint of onion and pickle.",
      "imagePath": "burger3",
      "price": 1.5,
      "category": "Burgers",
      "availableAddons": [
        {"name": "Extra Cheese", "price": 0.99},
        {"name": "Pickle", "price": 0.99},
        {"name": "Mustard Sauce", "price": 0.5},
        {"name": "Jalapeno", "price": 2.0}
      ]
    },
    {
      "name": "Smoked Grill Burger",
      "description": "A smoky grilled chicken patty with melted cheddar, tomato, and a hint of onion and pickle.",
      "imagePath": "burger4",
      "price": 2.0,
      "category": "Burgers",
      "availableAddons": [
        {"name": "Extra Patty", "price": 0.99},
        {"name": "Mustard Sauce", "price": 0.5},
        {"name": "Jalapeno", "price": 2.0}
      ]
    },
    {
      "name": "Greek Salad",
      "description": "Tomatoes, cucumbers, red onions, olives, with olive oil and herbs.",
      "imagePath": "salad1",
      "price": 7.0,
      "category": "Salads",
      "availableAddons": [
        {"name": "Grilled Chicken", "price": 0.99},
        {"name": "Pickle", "price": 0.5},
        {"name": "Jalapeno", "price": 2.0}
      ]
    },
    {
      "name": "Russian Salad",
      "description": "Creamy salad with Apple, Pineapple, cucumbers, olives, with olive oil and herbs.",
      "imagePath": "salad2",
      "price": 9.99,
      "category": "Salads",
      "availableAddons": [
        {"name": "Grilled Chicken", "price": 0.99},
        {"name": "Sauce", "price": 0.5},
        {"name": "Almond", "price": 2.0}
      ]
    },
    {
      "name": "Italian Salad",
      "description": "Part green salad, part antipasto salad, this recipe combines lettuce, celery, onion, peperoni, olives, and cherry tomatoes.",
      "imagePath": "salad3",
      "price": 6.5,
      "category": "Salads",
      "availableAddons": [
        {"name": "Grilled Chicken", "price": 0.99},
        {"name": "Mayo", "price": 1.0}
      ]
    },
    {
      "name": "Fruit Salad",
      "description": "Fruit salad is a dish consisting of various kinds of fruit, sometimes served in a liquid, either their juices or a syrup.",
      "imagePath": "salad4",
      "price": 9.99,
      "category": "Salads",
      "availableAddons": [
        {"name": "Grilled Chicken", "price": 0.99},
        {"name": "Pineapple", "price": 0.99},
        {"name": "Berries", "price": 0.99}
      ]
    },
    {
      "name": "Potato Fries",
      "description": "This French fries recipe is made using a clever, proven cooking method that guarantees crispy fries - and they STAY crispy for ages.",
      "price": 2.99,
      "imagePath": "sides1",
      "category": "Sides",
      "availableAddons": [
        {"name": "Grilled Chicken", "price": 0.99},
        {"name": "Cheese", "price": 0.99},
        {"name": "Pickle", "price": 0.99}
      ]
    },
    {
      "name": "Onion Rings",
      "description": "Onion Rings are deliciously crisp, golden and made with just a handful of ingredients. Add them to burgers for a satisfying crunch.",
      "price": 1.99,
      "imagePath": "sides2",
      "category": "Sides",
      "availableAddons": [
        {"name": "Grilled Chicken", "price": 0.99},
        {"name": "Pickle", "price": 0.99}
      ]
    },
    {
      "name": "Mozzarella Sticks",
      "description": "Cheesy mozzarella sticks served with marinara sauce.",
      "price": 2.49,
      "imagePath": "sides3",
      "category": "Sides",
      "availableAddons": [
        {"name": "Extra Cheese", "price": 0.5},
        {"name": "Ranch Dip", "price": 0.5}
      ]
    },
    {
      "name": "Garlic Bread",
      "description": "Crispy garlic bread topped with melted butter and herbs.",
      "price": 1.99,
      "imagePath": "sides4",
      "category": "Sides",
      "availableAddons": [
        {"name": "Cheese", "price": 0.5},
        {"name": "Marinara Sauce", "price": 0.5}
      ]
    },
    {
      "name": "Coleslaw",
      "description": "Fresh and tangy coleslaw made with shredded cabbage and carrots.",
      "price": 1.49,
      "imagePath": "sides5",
      "category": "Sides",
      "availableAddons": [
        {"name": "Extra Dressing", "price": 0.25},
        {"name": "Cranberries", "price": 0.5}
      ]
    },
    {
      "name": "Lemonade",
      "description": "Freshly squeezed lemonade.",
      "price": 1.49,
      "imagePath": "drink1",
      "category": "Drinks",
      "availableAddons": [
        {"name": "Mint", "price": 0.25},
        {"name": "Ice", "price": 0.1}
      ]
    },
    {
      "name": "Iced Tea",
      "description": "Chilled iced tea with a hint of lemon.",
      "price": 1.49,
      "imagePath": "drink2",
      "category": "Drinks",
      "availableAddons": [
        {"name": "Lemon", "price": 0.25},
        {"name": "Sugar", "price": 0.1}
      ]
    },
    {
      "name": "Milkshake",
      "description": "Creamy milkshake available in various flavors.",
      "price": 2.99,
      "imagePath": "drink3",
      "category": "Drinks",
      "availableAddons": [
        {"name": "Whipped Cream", "price": 0.5},
        {"name": "Cherry", "price": 0.25}
      ]
    },
    {
      "name": "Orange Juice",
      "description": "Fresh orange juice perfect for sunny weather.",
      "price": 1.99,
      "imagePath": "drink4",
      "category": "Drinks",
      "availableAddons": [
        {"name": "Slice", "price": 0.25},
        {"name": "Mint", "price": 0.5}
      ]
    },
    {
      "name": "Choclate Cake",
      "description": "Fresh Cake.",
      "price": 1.99,
      "imagePath": "dessert1",
      "category": "Desserts"
    },
    {
      "name": "Waffers",
      "description": "Crunchy waffers.",
      "price": 1.99,
      "imagePath": "dessert2",
      "category": "Desserts",
      "availableAddons": [
        {"name": "Choclate", "price": 0.25},
        {"name": "Scopp", "price": 0.5}
      ]
    },
    {
      "name": "Cup Cakes",
      "description": "Strawberry cupcakes.",
      "price": 1.99,
      "imagePath": "dessert3",
      "category": "Desserts",
      "availableAddons": [
        {"name": "Waffer", "price": 0.25},
        {"name": "Sprinkles", "price": 0.5}
      ]
    },
    {
      "name": "Kitkat Shake",
      "description": "Icecream with kitkat.",
      "price": 1.99,
      "imagePath": "dessert4",
      "category": "Desserts",
      "availableAddons": [
        {"name": "Kitkat", "price": 0.25},
        {"name": "Scopp", "price": 0.5}
      ]
    }
  ]
}
