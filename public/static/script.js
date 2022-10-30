var url =
    "https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?75657"
var s = document.createElement("script")
s.type = "text/javascript"
s.async = true
s.src = url
var options = {
    enabled: true,
    chatButtonSetting: {
        backgroundColor: "#4dc247",
        ctaText: "",
        borderRadius: "25",
        marginLeft: "0",
        marginBottom: "50",
        marginRight: "50",
        position: "right",
    },
    brandSetting: {
        brandName: "Pista House Irving",
        brandSubTitle: "",
        brandImg:
            "https://pps.whatsapp.net/v/t61.24694-24/297194525_588901916069868_6363221106254855593_n.jpg?ccb=11-4&oh=01_AVxgCpcqUhD8ZoSyF0Y63ccT_jZCF1zBni1fb1H-iEQaOw&oe=633C7A16",
        welcomeText: "Hi there!\nTo start an order:\nPlease Click Start Chat",
        messageText: "",
        backgroundColor: "#06bd9c",
        ctaText: "Start Chat",
        borderRadius: "25",
        autoShow: false,
        phoneNumber: "12143042304",
    },
}
s.onload = function () {
    CreateWhatsappChatWidget(options)
}
var x = document.getElementsByTagName("script")[0]
x.parentNode.insertBefore(s, x)
