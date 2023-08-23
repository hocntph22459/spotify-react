import { createContext, useContext, useRef, useState } from 'react';
import { Button, Form, FormItemProps, Input, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { message } from "antd"
import ReCAPTCHA from 'react-google-recaptcha';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import IUser from '../../../types/user';
import { Signup } from '../../../api/auth';
const MyFormItemContext = createContext<(string | number)[]>([]);

function toArr(str: string | number | (string | number)[]): (string | number)[] {
    return Array.isArray(str) ? str : [str];
}
const MyFormItem = ({ name, ...props }: FormItemProps) => {
    const prefixPath = useContext(MyFormItemContext);
    const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return <Form.Item name={concatName} {...props} />;
};
const SignupPage = () => {
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (value: IUser) => {
        if (isVerified == true) {
            const key = 'loading'
            if (value) {
                try {
                    const loading = await message.loading({ content: 'loading!', key, duration: 2 })
                    if (loading) {
                        const response: any = await Signup(value);
                        if (response) {
                            setIsModalOpen(false);
                            message.success(response.message, 3);
                            navigate('/')
                        }
                    }

                } catch (error: any) {
                    message.error(error.response.data.message, 5);
                }
            }
        }
    };

    const handleRecaptcha = (value: string | null) => {
        if (value) {
            setIsVerified(true);
        }
    };

    const showModalSignup = () => {
        setIsModalOpen(true);
    };

    const handleOkSignup = () => {
        setIsModalOpen(false);
    };

    const handleCancelSignup = () => {
        setIsModalOpen(false);
    };
    return (
        <section>

                <Form className="mt-[30px] w-[400px] mx-auto" name="form_item_path" layout="vertical" onFinish={onFinish} autoComplete="off">
                    <h1 tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800 mb-8">
                        signup to your account
                    </h1>
                    <MyFormItem className='text-black font-bold'
                        rules={[
                            {
                                message: 'vui lòng nhập name!',
                                required: true,
                            },
                        ]}
                        name="name"
                        label="name"
                    >
                        <Input className='font-mono border border-indigo-600 h-10' placeholder="nhập name" />
                    </MyFormItem>
                    <MyFormItem className='text-black font-bold'
                        name="email"
                        label="Email"
                        rules={[
                            {
                                message: 'vui lòng nhập email!',
                                required: true,
                                type: 'email'
                            },
                        ]}
                    >
                        <Input className='font-mono border border-indigo-600 h-10' placeholder="nhập email" />
                    </MyFormItem>
                    <MyFormItem className='text-black font-bold'
                        name="password"
                        label="mật khẩu"
                        rules={[
                            {
                                message: 'vui lòng nhập password!',
                                required: true,
                            },
                        ]}
                    >
                        <Input.Password
                            type='password' className='font-mono border border-indigo-600 h-10' placeholder="nhập password"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </MyFormItem>
                    <MyFormItem className='text-black font-bold'
                        name="confirmpassword"
                        label="nhập lại mật khẩu"
                        rules={[
                            {
                                message: 'vui lòng nhập confirm password!',
                                required: true,
                            },
                        ]}
                    >
                        <Input.Password
                            type='password' className='font-mono h-10 border border-indigo-600' placeholder="nhập lại password"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </MyFormItem>
                    <MyFormItem>
                        <ReCAPTCHA className=''
                            ref={recaptchaRef}
                            sitekey="6Ld_Ek8mAAAAAKtnDYdUCNiClx9m52L_aafio6we"
                            onChange={handleRecaptcha}
                        />
                        {isVerified ? (
                            <p>Xác thực thành công!</p>
                        ) : (
                            <p className='text-[red]'>Vui lòng xác thực bằng Recaptcha trước khi tiếp tục.</p>
                        )}
                    </MyFormItem>
                    <Button
                        htmlType="submit"
                        className="w-full h-[52px] text-center py-3 bg-[black] rounded-lg text-white hover:bg-green-dark focus:outline-none my-1"
                    >
                        Sign up
                    </Button>
                </Form>
        </section>

    );
};

export default SignupPage;
