export class LiquiImage {

    title: string = '';
    url: string = '';
    isLiked: boolean = false;

    wasPrevious: boolean = false;
    wasNext: boolean = false;

    private _isActive: boolean = false;
    get isActive(): boolean {
        return this._isActive;
    }
    set isActive(x: boolean) {
        this._isActive = x;

        if (this._isActive) {
            this._isPrevious = false;
            this._isNext = false;
        }
    }

    private _isPrevious: boolean = false;
    get isPrevious(): boolean {
        return this._isPrevious;
    }
    set isPrevious(x: boolean) {
        this._isPrevious = x;

        if (this._isPrevious) {
            this._isActive = false;
            this._isNext = false;
        }
    }

    private _isNext: boolean = false;
    get isNext(): boolean {
        return this._isNext;
    }
    set isNext(x: boolean) {
        this._isNext = x;

        if (this._isNext) {
            this._isActive = false;
            this._isPrevious = false;
        }
    }

    get currentClasses(): string {

        if (this.isActive && this.wasNext) {
            return 'slider-single proactivede active';
        } else if (this.isActive && this.wasPrevious) {
            return 'slider-single preactivede active';
        } else if (this.isPrevious) {
            return 'slider-single preactive';
        } else if (this.isNext) {
            return 'slider-single proactive';
        }

        return 'slider-single';
    }
}