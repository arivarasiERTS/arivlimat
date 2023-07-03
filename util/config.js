const ENV = 'staging';
export const FF = ({
    uat:{
        f1: true,
        f2: true,
    },
    staging:{
        f1: true,
        f2: false,
    },
    production:{
        f1: true,
        f2: false,
    }  
}) [ENV || 'production'];