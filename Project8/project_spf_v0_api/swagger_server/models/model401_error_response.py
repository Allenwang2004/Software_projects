# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.cmpnt_processing_time import CmpntProcessingTime  # noqa: F401,E501
from swagger_server import util


class Model401ErrorResponse(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, reference_id: str=None, uid: str=None, status_code: int=None, processing_time: CmpntProcessingTime=None, error_message: str=None):  # noqa: E501
        """Model401ErrorResponse - a model defined in Swagger

        :param reference_id: The reference_id of this Model401ErrorResponse.  # noqa: E501
        :type reference_id: str
        :param uid: The uid of this Model401ErrorResponse.  # noqa: E501
        :type uid: str
        :param status_code: The status_code of this Model401ErrorResponse.  # noqa: E501
        :type status_code: int
        :param processing_time: The processing_time of this Model401ErrorResponse.  # noqa: E501
        :type processing_time: CmpntProcessingTime
        :param error_message: The error_message of this Model401ErrorResponse.  # noqa: E501
        :type error_message: str
        """
        self.swagger_types = {
            'reference_id': str,
            'uid': str,
            'status_code': int,
            'processing_time': CmpntProcessingTime,
            'error_message': str
        }

        self.attribute_map = {
            'reference_id': 'reference_id',
            'uid': 'uid',
            'status_code': 'status_code',
            'processing_time': 'processing_time',
            'error_message': 'error_message'
        }
        self._reference_id = reference_id
        self._uid = uid
        self._status_code = status_code
        self._processing_time = processing_time
        self._error_message = error_message

    @classmethod
    def from_dict(cls, dikt) -> 'Model401ErrorResponse':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The 401_error_response of this Model401ErrorResponse.  # noqa: E501
        :rtype: Model401ErrorResponse
        """
        return util.deserialize_model(dikt, cls)

    @property
    def reference_id(self) -> str:
        """Gets the reference_id of this Model401ErrorResponse.


        :return: The reference_id of this Model401ErrorResponse.
        :rtype: str
        """
        return self._reference_id

    @reference_id.setter
    def reference_id(self, reference_id: str):
        """Sets the reference_id of this Model401ErrorResponse.


        :param reference_id: The reference_id of this Model401ErrorResponse.
        :type reference_id: str
        """

        self._reference_id = reference_id

    @property
    def uid(self) -> str:
        """Gets the uid of this Model401ErrorResponse.


        :return: The uid of this Model401ErrorResponse.
        :rtype: str
        """
        return self._uid

    @uid.setter
    def uid(self, uid: str):
        """Sets the uid of this Model401ErrorResponse.


        :param uid: The uid of this Model401ErrorResponse.
        :type uid: str
        """

        self._uid = uid

    @property
    def status_code(self) -> int:
        """Gets the status_code of this Model401ErrorResponse.


        :return: The status_code of this Model401ErrorResponse.
        :rtype: int
        """
        return self._status_code

    @status_code.setter
    def status_code(self, status_code: int):
        """Sets the status_code of this Model401ErrorResponse.


        :param status_code: The status_code of this Model401ErrorResponse.
        :type status_code: int
        """

        self._status_code = status_code

    @property
    def processing_time(self) -> CmpntProcessingTime:
        """Gets the processing_time of this Model401ErrorResponse.


        :return: The processing_time of this Model401ErrorResponse.
        :rtype: CmpntProcessingTime
        """
        return self._processing_time

    @processing_time.setter
    def processing_time(self, processing_time: CmpntProcessingTime):
        """Sets the processing_time of this Model401ErrorResponse.


        :param processing_time: The processing_time of this Model401ErrorResponse.
        :type processing_time: CmpntProcessingTime
        """

        self._processing_time = processing_time

    @property
    def error_message(self) -> str:
        """Gets the error_message of this Model401ErrorResponse.


        :return: The error_message of this Model401ErrorResponse.
        :rtype: str
        """
        return self._error_message

    @error_message.setter
    def error_message(self, error_message: str):
        """Sets the error_message of this Model401ErrorResponse.


        :param error_message: The error_message of this Model401ErrorResponse.
        :type error_message: str
        """

        self._error_message = error_message