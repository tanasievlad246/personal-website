import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);



const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
        props: true
    },
    {
        path: "/about",
        name: "About",
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
        props: true
    },
    {
        path: "/portofolio",
        name: "Portofolio",
        component: () => import(/* webpackChunkName: "about" */ "../views/Portofolio.vue"),
        props: true
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
        props: true
    },
    {
        //path matching anything, needs to be last in order to math last
        path: "/404",
        alias: "*",
        name: "notFound",
        component: () => import(/* webpachChunkName: "Not found" */ "../views/NotFound.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    //saves the position of the browser scroll anchor to redirect directly to that position
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) { //if there is a position return it
            return savedPosition
        } else { //if there is not a position save the anchor hash to the object
            const position = {};
            if (to.hash) {
                position.selector = to.hash;
                //offsets the acnhor position on render by 140 pixels
                if (to.hash === "#experience") {
                    position.offset = { y: 180 }
                }
                /*
                //this line paired with the mode="out-in" on the transition component 
                prevent from being sent back to the top of the page if its scrolled down to the bottom
                */
                if (document.querySelector(to.hash)) {
                    return position;
                }
                return false;
            }
        }
    },
    routes
});

export default router;
