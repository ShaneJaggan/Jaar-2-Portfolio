export class ThemeSwitcher{
    constructor (){
        if (this.getValue()) {
            this.colormode = this.getValue();
            this.display();
        }else {
            this.colormode = "darkMode";
        }
        this.save();
    }

    save(){
        localStorage.setItem("colormode", this.colormode);
    }

    getValue(){
        return localStorage.getItem("colormode");
    }

    setValue(d){
        this.colormode = d;
        this.save();
        this.display();
    }

    display(){
        switch (this.getValue()) {
            case "darkMode":
                this.clear();
                break;
            case "lightMode":
                this.clear();
                document.body.classList.add(this.getValue());
                break;
            case "redMode":
                this.clear();
                 document.body.classList.add(this.getValue());
                 break;
            case "blueMode":
                this.clear();
                document.body.classList.add(this.getValue());
                break;
            case "purpleMode":
                this.clear();
                document.body.classList.add(this.getValue());
                break;
            default:
                this.clear();
                break;
        }
    }

    clear(){
        document.body.classList.remove("lightMode");
        document.body.classList.remove("redMode");
        document.body.classList.remove("blueMode");
        document.body.classList.remove("purpleMode");
    }
}
