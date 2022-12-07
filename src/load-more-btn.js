export default class LoadMoreBtn{
    constructor({selector,hidden=false}){
        this.refs = this.getRefs(selector);
        hidden&&this.hide();
    }

    getRefs(selector){
        const refs={};
        refs.button=document.querySelector(selector);
        refs.label=refs.button.querySelector('.label');
        refs.spinner=refs.button.querySelector('.spinner-border ');

        return refs
    }

    enable(){
        this.refs.button.disabled=false;
        this.refs.label.textContent='Load-more';
        this.refs.spinner.classList.add('spinner-border', 'is-hidden');
    }

    disabled(){
        this.refs.button.disabled=true;
        this.refs.label.textContent='Load'
        this.refs.spinner.classList.remove( 'is-hidden');
    }

    show(){
        this.refs.button.classList.remove('[data-action="load-more"]','is-hidden')
    }

    hide(){
        this.refs.button.classList.add('[data-action="load-more"]','is-hidden')
    }


}