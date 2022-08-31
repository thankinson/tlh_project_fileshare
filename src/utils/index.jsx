const dbConnection = process.env.REACT_APP_REST_API

export const userLogin = async (username, password, setter) => {
    try {
        const response = await fetch(`${dbConnection}login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        const data = await response.json();
        setter(data.user);
        localStorage.setItem("myToken", data.token);
    } catch (error) {
        console.log(error);
    }
};

export const tokenLogin = async (setter) => {
    try {
            const response = await fetch(`${dbConnection}user`, {
                method: "GET",
                headers: {"Authorization": `Bearer ${localStorage.getItem("myToken")}`}, });
            const data = await response.json();
            setter(data.user);
    } catch (error) {
        console.log(error)
    }
};

export const fileAdd = async (setter) => {
    try {
        // upload code here
    } catch (error) {
        
    }
}