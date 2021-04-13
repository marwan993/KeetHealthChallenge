const obj = {num1: 1, num2: 2, num3: 3};
class Copier {
   async get() {
        await setTimeout(function(){
            alert(obj);
        }, 1000)
    }

    async delete() {
        await setTimeout(function(){
            throw new Error({ name: 'Error', message: 'Cannot delete!' });
        }, 2000);
    }

    copy() {
        let copiedObj = {};

        for (let k in obj)
        {
            if (typeof obj[k] === "object" && obj[k] !== null){
                copiedObj = JSON.parse(JSON.stringify(obj));
                copiedObj.num1 = 11; 
                copiedObj.num2 = 22;
                copiedObj.num3 = 33;
            }
        }
        return copiedObj;
    }
}

const copier = new Copier(obj);

