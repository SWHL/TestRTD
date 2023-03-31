#coding=UTF-8


class Demo1():
    """类的功能说明

    .. note::
        An example of intersphinx is this: you **cannot** use :mod:`pickle` on this class.

    """

    def add(self, a, b):
        """两个数字相加，并返回结果"""
        return a+b

    def google_style(arg1, arg2):
        """函数功能. 主要强调的是:meth:`arg1`与:meth:`args2`  :meth:`to`

        函数功能说明.

        Args:
            arg1 (int): arg1的参数说明
            arg2 (str): arg2的参数说明

        Returns:
            bool: 返回值说明

        .. note::
            An example of intersphinx is this: you **cannot** use :mod:`pickle` on this class.
        """
        return True

    def numpy_style(arg1, arg2):
        """函数功能.

        函数功能说明.

        Parameters
        ----------
        arg1 : int
            arg1的参数说明
        arg2 : str
            arg2的参数说明

        Returns
        -------
        bool
            返回值说明

        """
        return True
