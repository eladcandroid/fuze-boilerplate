import { init, AppContext, getRouteEmitter } from './node_modules/microfronts/dist/index.js';

const microfronts = init({
    apps: {
        'module-conduit': 'http://localhost:4000'
    },
    routes: {
        '*': {
            active: ['module-conduit']
        }
    }
});

function initializeApplication () {
    console.log(microfronts.route);
    const headerWrapper = document.querySelector('#header').contentWindow;
    getRouteEmitter().on('route-changed', (routeResolution) => {
        headerWrapper.location.hash = window.location.hash;
        document.body.setAttribute('route', routeResolution.base);
    });
    AppContext.set('navigate', function (route) {
        window.location.hash = route;
    });
    headerWrapper.AppContext = AppContext;
    if (!microfronts.route.base) {
        microfronts.router.applyHash('/');
    }
}


initializeApplication();