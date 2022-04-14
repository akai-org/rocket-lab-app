import { UserProfile } from '@auth0/nextjs-auth0';

// User who has logged in at most 30 seconds ago is considered 'just logged in'
const TIME_TRESHOLD = 30 * 1000;
let alreadyChecked = false;

/**
 * A function that accepts the user profile
 * and returns whether the user has jast logged in.
 * @param user The user profile
 */
export function hasJustLoggedIn(user: UserProfile): boolean {
    if(!user.updated_at) return false;
    // If already checked, it's not the first page after the login form
    if(alreadyChecked) return false;
    alreadyChecked = true;

    const updated = Date.parse(user.updated_at);
    const now = Date.now();
    console.log((now - updated) / 1000);
    return now - updated < TIME_TRESHOLD;
}

/**
 * Attaches a handler that prevents the user from going back to the login page.
 * Only done if it's the first visit on the page after logging in.
 */
export function preventBackToLogin(user: UserProfile | undefined): void {
    console.log('attach');
    window.addEventListener('popstate', (e) => {
        console.log(e.state);
        if(e.state && e.state.fromLogin) {
            console.log('Cannot go back to login');
            e.preventDefault();
            e.stopImmediatePropagation();
        }
    });

    if(!user) return;
    if(!hasJustLoggedIn(user)) return;

    console.log('forbid');
    const current_state = history.state;
    const new_state = Object.assign({ fromLogin: true }, current_state);
    history.replaceState(new_state, '', location.href);
    history.pushState(current_state, '', location.href);
}
