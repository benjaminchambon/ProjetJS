/**
 * Created by mateos on 08/06/2017.
 */
export function addFlashMessage(message) {
    console.log("messageAction");
    return {
        type: 'INFO_USER',
        message
    }
}