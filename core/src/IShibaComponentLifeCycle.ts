export interface IShibaComponentLifeCycle {
    view(): any;
    whenReady?(): void;
}

// Some interviewers like to ask questions about the lifecycle, so let's start with hundreds of lifecycles!
// Feel free to add your custom lifecycle!
export interface IShibaComponentLifeCycleForInterview {
    // For Android Users
    onCreate?(): void;
    onCreateView?(): string;
    onStart?(): void;
    onResume?(): void;
    onPause?(): void;
    onStop?(): void;
    onDestroyView?(): void;
    onDestroy?(): void;

    // For iOS Users
    viewDidLoad?(): void;
    viewWillAppear?(): void;
    viewDidAppear?(): void;
    viewWillDisappear?(): void;
    viewDidDisappear?(): void;

    // For Angular Users
    sbOnInit?(): void;
    sbOnChanges?(): void;
    sbAfterContentInit?(): void;
    sbAfterViewInit?(): void;
    sbOnDestroy?(): void;

    // For React Users
    componentDidMount?(): void;
    componentDidUpdated?(): void;
    componentWillUnmount?(): void;
    render?(): string;

    // For Vue Users
    beforeCreate?(): void;
    created?(): void;
    beforeMount?(): void;
    mounted?(): void;
    beforeUpdate?(): void;
    updated?(): void;
    beforeDestroy?(): void;
    destroyed?(): void;

    // Our lifecycle
    whenReady?(): void;
    view(): any;
}
